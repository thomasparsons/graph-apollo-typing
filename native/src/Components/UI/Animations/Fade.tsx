import React, { useState } from "react"
import { Animated } from "react-native"

const FadeInView = ({ children, style }) => {
  const [fadeAnim] = useState(new Animated.Value(0.4))

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        duration: 750,
        toValue: 1
      }
    ).start()
  }, [])

  const containerStyle = {
    opacity: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    }),
    transform: [
      {
        scale: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1.1, 1]
        })
      }
    ]
  }

  return (
    <Animated.View
      style={{
        ...containerStyle,
        ...style
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeInView
