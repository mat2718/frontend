import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { listStyles, colors } from '../../../styles';
import axios from '../../../../axiosConfig';

interface IProps {
  curriculumid: number;
  needby: number;
  quantitydemanded: number;
}

const DemandsListItem: React.FC<IProps> = (props: IProps) => {
  /** States for Picker */
  const [curriculum, setCurriculum] = React.useState([
    {
      curriculumname: '',
    },
  ]);

  /**
   * Touchable Link to contain individual Batch information.
   * Will lead to Individual Batch information
   */

  const fetchCurriculum = async () => {
    const res = await axios.get(`curriculum/id/${props.curriculumid}`);
    setCurriculum(res.data);
  };

  React.useEffect(() => {
    fetchCurriculum();

    return function cleanup() {
      setCurriculum([]);
    };
  }, []);

  return (
    /** Individual Batch Touchable */

    /** Structures and displays the data from the FlatList */
    <View style={styles.listItemContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={listStyles.subHeading}>
            {curriculum[0].curriculumname}
          </Text>
          <Text style={listStyles.textRegular}>
            {props.quantitydemanded +
              ' needed by ' +
              new Date(props.needby).toDateString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: colors.screenBg,
    borderRadius: 25,
  },

  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  dateView: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    height: 45,
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
    margin: 5,
  },

  dateText: {
    color: colors.darkGray,
    paddingLeft: 5,
  },
});

export default DemandsListItem;
