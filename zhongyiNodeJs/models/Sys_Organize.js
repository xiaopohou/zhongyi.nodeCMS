/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_Organize', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_ParentId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Layers: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		F_EnCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_FullName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ShortName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_CategoryId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ManagerId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_TelePhone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_MobilePhone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_WeChat: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Fax: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_AreaId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_AllowEdit: {
			type: "BIT",
			allowNull: true
		},
		F_AllowDelete: {
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
		tableName: 'Sys_Organize',
		timestamps: false,
		freezeTableName: true
	});
};
