import React from "react";

import CustomTextField from "./CustomTextField";

export default {
  component: CustomTextField,
  title: "CustomTextField",
};

const Template = (args) => <CustomTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  label: "test",
  rows: "1",
  value: "value",
};

export const PlaceHolder = Template.bind({});
PlaceHolder.args = {
  ...Default.args,
  placeHolder: "placeHolder",
};

export const Variant = Template.bind({});
Variant.args = {
  ...Default.args,
  variant: "filled",
};
