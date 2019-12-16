import React, { ReactNode } from "react"
import { FormattedMessage } from "react-intl"
import {
  Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View
} from "react-native"

import { Title } from "../Text"
import theme from "../theme"

interface Props {
  children: ReactNode
  title?: string,
  visible: boolean
  close (): void
}

const ModalWrapper = (props: Props) => {
  const {
    children, close, title, visible
  } = props
  return (
    <Modal
      animationType="slide"
      onRequestClose={close}
      transparent={false}
      visible={visible}
    >
      <SafeAreaView style={styles.view}>
        <View style={styles.header}>
          <Title>
            {title && <FormattedMessage id={title} />}
          </Title>
          <TouchableHighlight
            onPress={close}
            underlayColor="transparent"
          >
            <Text style={styles.close}>&times;</Text>
          </TouchableHighlight>
        </View>
        {children}
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  close: {
    color: theme.colors.primary.background,
    fontSize: 36,
    lineHeight: 30,
    textAlign: "right"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.padding.general
  },
  view: {
    height: "100%",
    margin: theme.padding.general
  }
})

export default ModalWrapper
