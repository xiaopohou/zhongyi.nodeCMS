/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_ItemsDetail', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_ItemId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ParentId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ItemCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ItemName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_SimpleSpelling: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_IsDefault: {
			type: "BIT",
			allowNull: true
		},
		F_Layers: {
			type: DataTypes.INTEGER,
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
		tableName: 'Sys_ItemsDetail',
		timestamps: false,
		freezeTableName: true
	});
};
