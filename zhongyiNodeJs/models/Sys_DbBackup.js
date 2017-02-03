/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_DbBackup', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_BackupType: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_DbName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_FileName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_FileSize: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_FilePath: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_BackupTime: {
			type: DataTypes.DATE,
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
		tableName: 'Sys_DbBackup',
		timestamps: false,
		freezeTableName: true
	});
};
