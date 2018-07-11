const SftpUpload = require('sftp-upload');
const Client = require('ssh2-sftp-client');
const sftp = new Client();
const fs = require('fs');
const REMOTE_URL = '/SecureBackup/Test/';
const FILE_PATH ='/home/tolasom/Desktop/oneswitch/localfilepath';


/**
 * @param config        {String} is used ssh2-sftp-client lib for read and get files
 * @param sftp_config   {String} is used to upload files to sftp server
 */


const config = {
    host : '10.1.1.2',
    port : '22',
    username : 'ftp01',
    password : 'AI789&*()'
};
const sftp_config = {
    host : '10.1.1.2',
    port : '22',
    username : 'ftp01',
    password : 'AI789&*()',
    path: '/home/tolasom/Desktop/oneswitch/localfilepath',
    remoteDir: '/SecureBackup/Test'

};

const UploadSftp = new SftpUpload(sftp_config);



module.exports.uploadFile = () =>{
    return new Promise((resolve,reject)=>{
        const hour = new Date();
        if(hour.getHours()=== 10 && hour.getMinutes()=== 55){
        fs.readdir(FILE_PATH,(err,files)=>{
            if(err) return reject('Unnable to scan'+ err); 	
            files.forEach((file)=>{
                return resolve(file);
                
            });
        });

        UploadSftp.on('error', (err)=>{
            throw err;
        })
        .on('uploading', (progress)=>{
            console.log('Uploading :', progress.file);
            console.log(progress.percent+ '% completed');
        })
        .on('completed', ()=> {
            console.log('Upload Completed');
        })
        .upload();
    }else{
        console.log('unnable to upload the files');
    }
    })


}


module.exports.getFileNameList = () =>{
    return new Promise ((resolve,reject)=>{
        sftp.connect(config)
        .then(()=>{
         return sftp.list(REMOTE_URL)
        .then((data)=>{
        let fileName = []
        data.forEach((data)=>{
            fileName.push(data.name);
        })
        resolve(fileName);
        })
    }).catch((err)=>{
    reject (err);
    })
    });
}

module.exports.downloadFile = (fileName) => {
    return REMOTE_URL+fileName;
}




