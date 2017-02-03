/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_User', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_Account: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_RealName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_NickName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_HeadIcon: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Gender: {
			type: "BIT",
			allowNull: true
		},
		F_Birthday: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_MobilePhone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_WeChat: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ManagerId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_SecurityLevel: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		F_Signature: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_OrganizeId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_DepartmentId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_RoleId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_DutyId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_IsAdministrator: {
			type: "BIT",
			allowNull: true
		},
		F_SortCode: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		F_DeleteMark: {
			type: "BIT",
			allowNull: true
		},
		F_EnabledMark: {
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
		},
		F_LastModifyTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_LastModifyUserId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_DeleteTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_DeleteUserId: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Sys_User',
		timestamps: false,
		freezeTableName: true
	});
};
