/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_Log', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_Account: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_NickName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_IPAddress: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_IPAddressName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ModuleId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ModuleName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Result: {
			type: "BIT",
			allowNull: true
		},
		F_Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_CreatorTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_CreatorUserId: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Sys_Log',
		timestamps: false,
		freezeTableName: true
	});
};
