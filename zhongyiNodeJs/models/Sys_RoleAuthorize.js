/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_RoleAuthorize', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_ItemType: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		F_ItemId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_ObjectType: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		F_ObjectId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_SortCode: {
			type: DataTypes.INTEGER,
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
		tableName: 'Sys_RoleAuthorize',
		timestamps: false,
		freezeTableName: true
	});
};
