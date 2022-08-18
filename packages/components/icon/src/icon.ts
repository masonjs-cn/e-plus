import { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  size: [Number, String] as PropType<number | string>,
  color: String,
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
