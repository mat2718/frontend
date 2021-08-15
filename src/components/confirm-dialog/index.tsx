import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { deleteBatch, confirmBatch } from '../../redux/actions/batch-actions';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
  type: string;
  visible: boolean;
  setVisible: any;
  payload: number;
}

const ConfirmDialog: React.FC<IProps> = (props: IProps) => {
  const hideDialog = () => props.setVisible(false);
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();
  const dispatch = useDispatch();

  /** Delete batch function */
  const confirmDelete = () => {
    dispatch(deleteBatch(props.payload));
    navigation.goBack();
  };

  /** Confirm batch function */
  const confirmConfirmBatch = () => {
    dispatch(confirmBatch(props.payload));
    hideDialog();
  };

  switch (props.type) {
    case 'confirmBatch':
      return (
        <View>
          <Portal>
            <Dialog visible={props.visible} onDismiss={hideDialog}>
              <Dialog.Title>Confirm batch</Dialog.Title>
              <Dialog.Content>
                <Paragraph>
                  Are you sure you want to confirm this batch?
                </Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>No</Button>
                <Button onPress={confirmConfirmBatch}>Yes</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      );
    case 'deleteBatch':
      return (
        <View>
          <Portal>
            <Dialog visible={props.visible} onDismiss={hideDialog}>
              <Dialog.Title>Delete batch</Dialog.Title>
              <Dialog.Content>
                <Paragraph>
                  Are you sure you want to delete this batch?
                </Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>No</Button>
                <Button onPress={confirmDelete}>Yes</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      );
    default:
      return (
        <View>
          <Portal>
            <Dialog visible={props.visible} onDismiss={hideDialog}>
              <Dialog.Title>Hi</Dialog.Title>
              <Dialog.Content>
                <Paragraph>
                  This is awkward. How'd you manage to get this message to show?
                </Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>I have no idea.</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      );
  }
};

export default ConfirmDialog;
