/**
 * GLOBAL STYLES
 **/
import { StyleSheet } from 'react-native';

/** Main Color Palette */
export const colors = {
  screenBg: 'rgb(250,250,250)',
  white: 'rgb(0,0,0)',
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
    backgroundColor: 'rgb(250,250,250)',
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
    fontWeight: '700',
    color: '#474c55',
  },

  /** Any additional text that you want as a header under the main screen's title, use this style */
  subHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#474c55',
  },

  /** Any normal text */
  regular: {
    color: '#474c55',
  },

  /** Any normal text but bold */
  regularBold: {
    color: '#474c55',
    fontWeight: '700',
  },
});

/** Button Styles */
export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    height: 40,
    width: 100,
    backgroundColor: '#f26925',
    borderRadius: 50,
    marginLeft: 10,
  },

  buttonText: {
    fontWeight: '700',
    color: '#ffffff',
    alignSelf: 'center',
  },
});

/** List Item Styles */
export const listStyles = StyleSheet.create({
  listItemContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 30,
    marginBottom: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  heading: {
    fontWeight: '700',
    fontSize: 14,
    color: '#474C55',
    marginRight: 5,
  },

  subHeading: {
    fontWeight: '700',
    fontSize: 12,
    color: '#474C55',
  },

  textRegular: {
    fontSize: 12,
    color: '#474C55',
  },
});

/** Badges Styles */
export const badgesStyles = StyleSheet.create({
  /** Standard badge (ex: active, upcoming, completed badges) */
  badge: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },

  badgeText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 10,
  },

  /** Badge with legends (ex: planned batches badge) */
  legendBadge: {
    backgroundColor: '#474C55',
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
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
});
