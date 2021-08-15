import React from 'react';
import { View, Text } from 'react-native';
import { listStyles } from '../../../styles';
import { Picker } from '@react-native-picker/picker';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { deleteSkill } from '../../../redux/actions/skill-actions';
import { useDispatch } from 'react-redux';

interface IProps {
  skillname: string;
  skillid: number;
}

const SkillsListItem: React.FC<IProps> = (props: IProps) => {
  /** States and functions for confirm delete dialog */
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  /** Hooks */
  const dispatch = useDispatch();

  const confirmDelete = () => {
    dispatch(deleteSkill(props.skillid));
  };

  return (
    /** Individual Clients Touchable */
    /** Structures and displays the data from the FlatList */
    <View style={listStyles.listItemContainer}>
      {/** Text and dropdown */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={listStyles.heading}>{props.skillname}</Text>
        <Picker
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
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Confirm deletion</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                {'Are you sure you want to delete ' + props.skillname + '?'}
              </Paragraph>
            </Dialog.Content>

            <Dialog.Actions>
              <Button onPress={hideDialog}>No</Button>
              <Button onPress={confirmDelete}>Yes</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default SkillsListItem;
