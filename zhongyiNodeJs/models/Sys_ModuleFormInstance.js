/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_ModuleFormInstance', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_FormId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		F_ObjectId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_InstanceJson: {
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
		tableName: 'Sys_ModuleFormInstance',
		timestamps: false,
		freezeTableName: true
	});
};
