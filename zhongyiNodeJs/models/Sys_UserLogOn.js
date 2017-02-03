/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sys_UserLogOn', {
		F_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		F_UserId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_UserPassword: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_UserSecretkey: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_AllowStartTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_AllowEndTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_LockStartDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_LockEndDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_FirstVisitTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_PreviousVisitTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_LastVisitTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_ChangePasswordDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		F_MultiUserLogin: {
			type: "BIT",
			allowNull: true
		},
		F_LogOnCount: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		F_UserOnLine: {
			type: "BIT",
			allowNull: true
		},
		F_Question: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_AnswerQuestion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_CheckIPAddress: {
			type: "BIT",
			allowNull: true
		},
		F_Language: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F_Theme: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Sys_UserLogOn',
		timestamps: false,
		freezeTableName: true
	});
};
