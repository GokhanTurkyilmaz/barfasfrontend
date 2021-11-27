export default class Device{
    constructor(DeviceName,Sn,Model,Type,Department,DeviceIP,DeviceAdmin,DeviceSuperUser,Remark,UserId,role){
        this.DeviceName=DeviceName,
        this.Sn=Sn,
        this.Model=Model,
        this.Type=Type,
        this.Department=Department,
        this.DeviceIP=DeviceIP,
        this.DeviceAdmin=DeviceAdmin,
        this.DeviceSuperUser=DeviceSuperUser,
        this.Remark=Remark,
        this.UserId=UserId,
        this.role=role
    }
}