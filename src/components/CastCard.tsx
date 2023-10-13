import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BORDERRADIUS, FONTFAMILY, FONTSIZE, SPACING, COLORS } from '../theme/theme';



const CastCard = (props: any) => {
    return (
        <View style={[styles.container, props.shouldMarginatedAtEnd ? props.isFirst ? { marginLeft: SPACING.space_24 } : props.isLast ? { marginRight: SPACING.space_24 } : {} : {}, { maxWidth: props.cardWidth }]}>
            <Image source={{ uri: props.imagePath }} style={[styles.cardImage, { width: props.cardWidth }]} />
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            <Text style={styles.subtitle} numberOfLines={1}>{props.subtitle}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cardImage: {
        aspectRatio: 1 / 1,
        objectFit: 'contain',
        borderRadius: BORDERRADIUS.radius_25,
        marginBottom: 5,

    },
    title: {
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_12,
        color: COLORS.White,
        marginBottom: 2,
    },
    subtitle: {
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_light,
        fontSize: FONTSIZE.size_10,
        color: COLORS.White,
    },
});
export default CastCard;
