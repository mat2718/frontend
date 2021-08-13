import React, { useState } from 'react';

const EditCurriculum: React.FC = () => {
    return (
        
    )
}

<ScrollView style={screenStyles.mainView}>
<View
  style={{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  }}
>
  <Text style={textStyles.heading}>
    {route.params ? 'Edit Curriculum' : 'Add Curriculum'}
  </Text>
</View>
<View style={styles.container}>
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.txtContainer}>Created On</Text>
    <Text style={styles.input}>{convertDate(createdDate)}</Text>
    {!isPickerShow && (
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={showPicker}
      >
        <Text style={styles.buttonText2}>
          <MaterialCommunityIcons
            name='calendar-edit'
            size={20}
            color='#474C55'
          />
        </Text>
      </TouchableOpacity>
    )}

    {isPickerShow && (
      <DateTimePicker
        value={createdDate}
        mode={'date'}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        onChange={onCreatedChange}
        style={styles.datePicker}
      />
    )}
  </View>
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.txtContainer}>Created By:</Text>
    <TextInput
      value={text}
      onChangeText={(createdByText) => setText(createdByText)}
      style={styles.input}
    />
  </View>

  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.txtContainer}>Last Modified On:</Text>
    <Text style={styles.input}>{convertDate(modifiedDate)}</Text>
    {!isPickerShow && (
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={showPicker}
      >
        <Text style={styles.buttonText2}>
          <MaterialCommunityIcons
            name='calendar-edit'
            size={20}
            color='#474C55'
          />
        </Text>
      </TouchableOpacity>
    )}

    {isPickerShow && (
      <DateTimePicker
        value={modifiedDate}
        mode={'date'}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        onChange={onModifiedChange}
        style={styles.datePicker}
      />
    )}
  </View>

  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.txtContainer}>Last Modified By:</Text>
    <TextInput
      value={text}
      onChangeText={(modifiedByText) => setText(modifiedByText)}
      style={styles.input}
    />
  </View>

  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.txtContainer}>Batches:</Text>
    <TextInput
      value={text}
      onChangeText={(batchesText) => setText(batchesText)}
      style={styles.input}
    />
  </View>

  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.txtContainer}>Skills:</Text>
    <TextInput
      value={text}
      onChangeText={(skillsText) => setText(skillsText)}
      style={styles.input}
    />
  </View>