/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_FilterIP', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_Type: {
			type: "BIT",
			allowNull: true
		},
		F_StartIP: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_EndIP: {
			type: DataTypes.STRING,
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
		tableName: 'Sys_FilterIP',
		timestamps: false,
		freezeTableName: true
	});
};
