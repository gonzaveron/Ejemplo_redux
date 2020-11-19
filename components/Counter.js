import React from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../userReducer";

function Counter({ count, increment, decrement, reset }) {
    return (
        <View>
            <Button
                title="-"
                onPress={decrement} />
            <Text>{count}</Text>
            <Button
                title="+"
                onPress={increment} />
            <Button
                title="Reset"
                onPress={reset} />
        </View>
    );
};

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    reset: () => dispatch(reset())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
