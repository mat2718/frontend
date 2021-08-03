import { Text, View, Pressable } from 'react-native';

// store different state store test states for mocked redux store
export const testState = {

}


export const ExampleComponent = () => {
    const callback = jest.fn();
    return (
        <>
            <View>
                <Text>Hello, {props.username}</Text>
                <SomeComponent/>
                <AnotherComponent/>
            </View>
            
            {}

            <Pressable onPress={callback}>
                <Text>Press me!</Text>
            </Pressable>
        </>
    );
}

const SomeComponent = () => {
    return <Text>SomeComponent</Text>
}

export const AnotherComponent = () => {
    return <Text>AnotherComponent</Text>
}

export default SomeComponent;s
