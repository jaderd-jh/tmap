export interface MarkToolProps extends T.MarkToolEvents, Omit<T.MarkToolOptions, 'icon'> {
  /** 覆盖物图标配置信息（不可控） */
  icon?: T.IconExtendOptions
}
