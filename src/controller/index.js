/**
 * @class
 * @apiDefine admin 后台管理
 */
module.exports = class extends think.adminBase {
   
    async loginOutAction() {
        await this.session(null);
        await this.cache('admin_' + this.adminId, null);
        await this.session('adminId', null);
        await this.session('salt', null);
        await this.session('statusTime', null);
        return this.success()
    }
    async consoleAction() {
        return this.success()
    }
};
