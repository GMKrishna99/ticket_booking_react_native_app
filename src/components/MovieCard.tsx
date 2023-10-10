
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';



const genres: any = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};


const MovieCard = (props: any) => {
    return (
        <TouchableOpacity onPress={() => props.cardFunction()}>
            <View style={[styles.container, props.shouldMarginatedAtEnd
                ? props.isFirst ? { marginLeft: SPACING.space_36 }
                    : props.isLast
                        ? { marginRight: SPACING.space_36 }
                        : {} : {},
            props.shouldMarginatedAround ? { margin: SPACING.space_12 } : {},
            { maxWidth: props.cardWidth },
            ]}>
                <Image style={[styles.cardImage, { width: props.cardWidth }]} source={{ uri: props.imagePath }} />

                <View>
                    <View style={styles.rateContainer}>
                        <CustomIcon name="star" style={styles.starIcon} />
                        <Text style={styles.VoteText}>{props.vote_average} ({props.vote_count})</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.textTitle}>{props.title}</Text>
                    <View style={styles.generContainer}>
                        {
                            props.genre.map((item: any) => {
                                return (
                                    <View key={item} style={styles.generBox}>
                                        <Text style={styles.generText} >{genres[item]}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    cardImage: {
        aspectRatio: 4 / 5,
        borderRadius: BORDERRADIUS.radius_20,
    },
    textTitle: {
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.White,
        textAlign: 'center',
        paddingVertical: SPACING.space_10,
    },
    rateContainer: {
        flexDirection: 'row',
        gap: SPACING.space_10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.space_10,
    },
    starIcon: {
        fontSize: FONTSIZE.size_20,
        color: COLORS.Yellow,
    },
    VoteText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
        textAlign: 'center',
    },
    generContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: SPACING.space_20,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    generBox: {
        borderColor: COLORS.WhiteRGBA50,
        borderWidth: 1,
        paddingVertical: SPACING.space_4,
        paddingHorizontal: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_25,
    },
    generText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_12,
        color: COLORS.WhiteRGBA75,
    },
});
export default MovieCard;

