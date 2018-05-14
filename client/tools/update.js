const fs = require('fs');
const glob = require('glob');
const path = require('path');
const exec = require('child_process').exec;

updatePxjson();

function updatePxjson() {
    const tmpDist= __dirname.split(path.sep);
    tmpDist.splice(tmpDist.length-2, 2);
    const root = path.join(tmpDist.join('/'));
    const pxjsonNewDir = path.join(root, 'client/build/pxjson');
    const pxjsonSubFis = glob.sync(path.join(pxjsonNewDir, '**/*'));
    const pxjsonOldDir = path.join(root, 'server/pxjson');

    console.log('\nCopy files ...\n');
    deleteDirectory(pxjsonOldDir);
    fs.mkdirSync(pxjsonOldDir);
    renameDirSubFls(pxjsonSubFis);
    // deleteDirectory(pxjsonNewDir);
    console.log('\nCongratulations, Update Succeed!');
}

function deleteDirectory(dir) {
    if( fs.existsSync(dir) ) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const subFile = path.join(dir, file);
            fs.statSync(subFile).isDirectory() ? deleteDirectory(subFile) : fs.unlinkSync(subFile);
        });
        fs.rmdirSync(dir);
    }
};

function renameDirSubFls(files) {
    files.forEach(file => {
        const target = path.join(file.replace(/client[\\\/]build/, 'server'));
        console.log(target);
        if (fs.statSync(file).isDirectory()) {
            fs.mkdirSync(target);
        } else {
            fs.createReadStream(file).pipe(fs.createWriteStream(target));
        }
    });
}

