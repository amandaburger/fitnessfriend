import { StyleSheet } from 'react-native';

/**
 * Style sheet for Feed.js and Profile.js
 */
export default StyleSheet.create({

    /**
     * Styles for Containers
     */
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardContainer: {
        width: '92%',
        height: '82%',
    },

    profileContainer: {
        flex: 1,
        marginTop: 10, // distance around edge (outside)
        padding: 20, // distance from egde to content inside
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 13,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.07,
        shadowRadius: 3.3,

    },

    /**
     * Styles for the header section of the profile page
     */
    image: {
        borderWidth: 2,
        borderColor: "#20232a",
        width: 150,
        height: 150,
        borderRadius: 400 / 2
    },
    name: {
        color: "#20232a",
        textAlign: "right",
        fontSize: 50,
        fontWeight: "bold"
    },
    text: {
        color: "#20232a",
        textAlign: "left",
        fontSize: 30,
        fontWeight: "bold"
    },

    /**
     * title: List Bubbles
     * section: Bubble
     * For the flatList's bubble container
     */

    bubbleItem: {
        backgroundColor: '#add8e6',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10
    },
    bubbleTitle: {
        fontSize: 18,
    },

});
