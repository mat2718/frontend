import React from 'react';
import { View, Text } from 'react-native';
import { listStyles } from '../../../styles';
import { Picker } from '@react-native-picker/picker';
import ConfirmDialog from '../../../components/confirm-dialog';

/**
 * Skill List Item - component that the skills flatlist uses as a renderItem
 * @param {IProps} props - interface properties of a skill
 * @returns {React.FC} - the individual item for the skills list
 * @author Oriel Red Oral
 */

interface IProps {
  skillname: string;
  skillid: number;
}

const SkillsListItem: React.FC<IProps> = (props: IProps) => {
  /** States and functions for confirm delete dialog */
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);

  return (
    /** Individual Clients Touchable */
    /** Structures and displays the data from the FlatList */
    <View style={listStyles.listItemContainer}>
      {/** Text and dropdown */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={listStyles.heading}>{props.skillname}</Text>
        <Picker
          testID='picker'
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) =>
            itemValue === 'delete' ? showDialog() : null
          }
          style={{ width: 75 }}
        >
          <Picker.Item label='Actions' value='actions' enabled={false} />
          <Picker.Item label='Delete' value='delete' />
        </Picker>
      </View>
      {/** Confirm dialog */}
      <ConfirmDialog
        type='deleteSkill'
        visible={visible}
        setVisible={setVisible}
        payload={{
          batchId: 0,
          trainerId: 0,
          curriculumId: 0,
          skillId: props.skillid,
        }}
      />
    </View>
  );
};

export default SkillsListItem;
