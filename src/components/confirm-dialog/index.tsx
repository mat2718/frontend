import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { deleteBatch, confirmBatch } from '../../redux/actions/batch-actions';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors } from '../../styles';

/**
 * Confirm Dialog - the component that pops up when we need to confirm an action
 * @param {IProps} interface - includes the action type, visibility state, setVisible state, and the payload (id needed for functions)
 * @returns {React.FC} - React Component for the edit batch screen
 * @author Oriel Red Oral
 */

interface IProps {
  type: string;
  visible: boolean;
  setVisible: any;
  payload: number;
}

const ConfirmDialog: React.FC<IProps> = (props: IProps) => {
  /** Navigation and dispatch hook */
  type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
  const navigation = useNavigation<mainScreenProp>();
  const dispatch = useDispatch();

  /** Hide dialog function */
  const hideDialog = () => props.setVisible(false);

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
    /** Confirm Batch Dialog */
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
                <Button
                  onPress={hideDialog}
                  style={styles.button}
                  color={colors.darkGray}
                >
                  No
                </Button>
                <Button
                  onPress={confirmConfirmBatch}
                  style={styles.button}
                  color={colors.orange}
                >
                  Yes
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      );
    /** Delete Batch Dialog */
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
                <Button
                  onPress={hideDialog}
                  style={styles.button}
                  color={colors.darkGray}
                >
                  No
                </Button>
                <Button
                  onPress={confirmDelete}
                  style={styles.button}
                  color={colors.orange}
                >
                  Yes
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      );
    /** Default Dialog */
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

/** Local StyleSheet */
const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
});

export default ConfirmDialog;
