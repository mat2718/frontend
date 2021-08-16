/**
 * GLOBAL STYLES
 **/
import { StyleSheet } from 'react-native';

/** Main Color Palette */
export const colors = {
  screenBg: 'rgb(250,250,250)',
  white: 'rgb(255,255,255)',
  lightGray: 'rgb(185,185,186)',
  darkGray: 'rgb(72,76,86)',
  orange: 'rgb(242,105,38)',
  yellow: 'rgb(253,181,21)',
  blue: 'rgb(115,165,194)',
};

/** View Styles */
export const screenStyles = StyleSheet.create({
  /** Wrap your top-level in a safeareaview with this style */
  safeAreaView: {
    backgroundColor: colors.screenBg,
    flex: 1,
  },

  /** The view under your safeareaview, ideally a scrollview for screens without a flatlist **/
  mainView: {
    padding: 25,
  },

  /** Since screen titles have a button next to it, we need to wrap both the text and button in a view with this style */
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

/** Text Styles */
export const textStyles = StyleSheet.create({
  /** Main title, as in your screen's title */
  heading: {
    fontSize: 24,
    color: colors.darkGray,
    fontFamily: 'FuturaBold',
  },

  /** Any additional text that you want as a header under the main screen's title, use this style */
  subHeading: {
    fontSize: 20,
    fontFamily: 'FuturaBold',
    color: colors.darkGray,
  },

  /** Any normal text */
  regular: {
    color: colors.darkGray,
    fontFamily: 'FuturaBook',
    fontWeight: '700',
  },

  /** Any normal text but bold */
  regularBold: {
    color: colors.darkGray,
    fontFamily: 'FuturaBold',
  },
});

/** Input Styles */
export const inputStyles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5,
  },

  textInput: {
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5,
    padding: 10,
  },

  inputLabelText: {
    marginTop: 5,
    paddingLeft: 5,
  },
});

/** Button Styles */
export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    height: 35,
    width: 125,
    padding: 10,
    backgroundColor: colors.orange,
    borderRadius: 50,
    marginLeft: 10,
  },

  buttonCompactContainer: {
    justifyContent: 'center',
    height: 35,
    width: 100,
    padding: 10,
    backgroundColor: colors.orange,
    borderRadius: 50,
    marginLeft: 10,
  },

  buttonCompactOutlineContainer: {
    justifyContent: 'center',
    height: 35,
    width: 100,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.orange,
    borderRadius: 50,
    marginLeft: 10,
  },

  buttonText: {
    color: colors.white,
    alignSelf: 'center',
    fontFamily: 'FuturaBook',
    fontWeight: '700',
  },

  buttonSecondaryText: {
    color: colors.orange,
    alignSelf: 'center',
    fontFamily: 'FuturaBook',
    fontWeight: '700',
  },
});

/** List Item Styles */
export const listStyles = StyleSheet.create({
  listItemContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
    flex: 1,
    width: '90%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
  },

  heading: {
    fontSize: 14,
    color: colors.darkGray,
    marginRight: 5,
    fontFamily: 'FuturaBold',
    flex: 0.8,
  },

  subHeading: {
    fontFamily: 'FuturaBook',
    fontWeight: '700',
    fontSize: 12,
    color: colors.darkGray,
  },

  textRegular: {
    fontSize: 12,
    color: colors.darkGray,
    fontFamily: 'FuturaBook',
    fontWeight: '700',
  },
});

/** Badges Styles */
export const badgesStyles = StyleSheet.create({
  /** Standard badge (ex: active, upcoming, completed badges) */
  badge: {
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 5,
  },

  badgeText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'FuturaBook',
    fontWeight: '700',
    fontSize: 10,
  },

  /** Badge with legends (ex: planned batches badge) */
  legendBadge: {
    backgroundColor: colors.darkGray,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    overflow: 'hidden',
  },

  legendBadgeText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'FuturaBook',
    fontWeight: '700',
    fontSize: 12,
  },
});
