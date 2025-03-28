module.exports = (sequelize, DataTypes) => {
    const Cargo = sequelize.define("Cargo", {
        numeroDeTransit: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        numeroDeBalise: {
            type: DataTypes.STRING,
            allowNull: true,
           // unique: true,
            /*validate: {
                notEmpty: true,
            },*/
        },
        codeHS: {
            type: DataTypes.JSON, // Use JSON data type for an array of objects
            allowNull: false,
            defaultValue: [],
           // unique: true,
            validate: {
                notEmpty: true,
            },
        },
        corridor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        typeDeVehicule: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        immatriculation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        transitaire: {
            type: DataTypes.JSON, // Use JSON data type for an array of objects
            allowNull: false,
            defaultValue: [],
           // type: DataTypes.STRING,
           // allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        chauffeur: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        creationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        creationHeureDebut: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

        creationDateFin: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        creationHeureFin: {
            type: DataTypes.TIME,
            allowNull: true,
           /* validate: {
                notEmpty: true,
            },*/
        },
        alarme: {
            type: DataTypes.JSON, // Use JSON data type for an array of objects
            allowNull: false,
            defaultValue: [],
        },
        clotureDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            },
        clotureHeure: {
            type: DataTypes.TIME,
            allowNull: true,
            },
        clotureLieu: {
            type: DataTypes.STRING,
            allowNull: true,
            },
        clotureMode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        duree: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        addedBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    // Define associations
    Cargo.associate = (models) => {
        Cargo.belongsTo(models.User, { foreignKey: 'addedBy', as: 'user' });
    };

    return Cargo;
};
