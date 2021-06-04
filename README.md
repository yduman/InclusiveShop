# Inclusive Shop

## General Information
### What

This project is an offline shop demonstrating common a11y techniques. The app design is inspired by [Zalando](https://www.zalando.com/).

### Why

The goal of this project is to highlight techniques regarding a11y and moreover Inclusive Design in the realm of React Native. It is also the project for my thesis. The corresponding paper will be published later.

### How

- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Native Base v3](https://alpha.nativebase.io/docs/nativebase)
- [Material Design](https://material.io/design/usability/accessibility.html#understanding-accessibility)

## Color Contrast

> https://webaim.org/resources/contrastchecker/

```ts
const theme = {
  ...CombinedDefaultTheme,
  colors: {
    ...CombinedDefaultTheme.colors,
    primary: "#EAE7DC",
    accent: "#0F0F0F",
    background: "#FFFFFF",
  },
  fonts: configureFonts(fonts),
};
```

- Primary Background + Accent Foreground = [Contrast Ratio of 15.48:1](https://color.a11y.com/ContrastPair/?bgcolor=EAE7DC&fgcolor=0F0F0F)
- White Background + Accent Foreground = [Contrast Ratio of 19.16:1](https://color.a11y.com/ContrastPair/?bgcolor=FFFFFF&fgcolor=0F0F0F)
- All combinations pass WCAG AA and WCAG AAA

## Recognized Issues

- There were cases where the screen reader would just ignore `accessibilityLabel`. It would constantly start reading `accessibilityHint`
- Handling focus programmatically is a hard task and not really stable as it seems, since you need to call `AccessibilityInfo.setAccessibilityFocus(reactTag)` multiple times in order to work reliably. Read [this issue](https://github.com/facebook/react-native/issues/30097) for further information.