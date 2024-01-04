const Sequelize = require('sequelize');
const LastUploadTable = require('../model/last_upload');
const MasterFileTable = require('../model/master_file');
const DetailFileTable = require('../model/detail_file');
const moment = require('moment')

const postVodCheckin = async(req, res)=> {
    try {

        const outletCode = req.body.outlet;
        const version = req.body.version;
        const files = req.body.file;

        for(let i = 0; i<files.length; i++){
            
            const checkMaster = await MasterFileTable.findOne({
                where:{
                    outlet: outletCode,
                    file_name: files[i].name
                },
                raw: true
            });

            if(checkMaster){
                const convertModified = moment(checkMaster.date_modified).format('YYYY-MM-DD HH:mm:ss')
                if(convertModified == files[i].date_modified){
                    continue;
                }

                const isIdentic = await DetailFileTable.findOne({
                    where:{
                        outlet: files[i].detail.outlet,
                        file_name: files[i].detail.file_name,
                        room_no: files[i].detail.room_no,
                        service_time: files[i].detail.service_time,
                        room_open_time: files[i].detail.room_open_time,
                        room_close_time: files[i].detail.room_close_time,
                    },
                    raw: true
                });

                if(isIdentic){
                    continue;
                }
            }

            await MasterFileTable.upsert({
                outlet: outletCode,
                file_name: files[i].name,
                date_modified: files[i].date_modified,
            });

            await DetailFileTable.create(files[i].detail);

        }

        await LastUploadTable.upsert({
            outlet: outletCode,
            last_upload: Sequelize.literal('NOW()'),
            version: version,
        });
        res.send('success')
    } catch (err) {
        console.log(`
            err: ${err.name},
            message: ${err.message},
            stack: ${err.stack}
        `)
    }
}

module.exports = {
    postVodCheckin
}