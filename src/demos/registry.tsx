import type { ComponentType } from 'react'
import { complete } from '../domain/complete'
import type { DemoId } from '../domain/types'
import { AccordionDemo } from './accordion'
import { ButtonDemo, IconButtonDemo, LinkDemo } from './action'
import { AlertDialogDemo } from './alert-dialog'
import { CommandDemo } from './command'
import { ControlledDemo } from './controlled'
import { DialogDemo } from './dialog'
import { AvatarDemo, AutocompleteDemo, BadgeDemo, CardDemo, TagDemo } from './display'
import { DrawerDemo } from './drawer'
import { DropdownMenuDemo } from './dropdown-menu'
import { AlertDemo, EmptyDemo, PopconfirmDemo, ProgressDemo, SkeletonDemo, SpinnerDemo } from './feedback'
import { FocusTrapDemo } from './focus-trap'
import {
  CheckboxDemo,
  FieldDemo,
  InputDemo,
  NumberInputDemo,
  RadioDemo,
  SliderDemo,
  SwitchDemo,
  TextareaDemo,
} from './form'
import { HeadlessDemo } from './headless'
import {
  ExpandDemo,
  FadeDemo,
  KeyframesDemo,
  PresenceDemo,
  ReducedMotionDemo,
  ScaleDemo,
  SlideDemo,
  SpringDemo,
  StaggerDemo,
  TransitionDemo,
} from './motion'
import {
  BounceDemo,
  CheckDemo,
  DelayDemo,
  EasingDemo,
  FlipDemo,
  FlipLayoutDemo,
  HoverDemo,
  IndicatorDemo,
  IndeterminateDemo,
  LoadingDotsDemo,
  PressDemo,
  PulseDemo,
  RippleDemo,
  ScrollRevealDemo,
  ShakeDemo,
  ShimmerDemo,
  SmoothScrollDemo,
  SwipeDemo,
  TimelineDemo,
  TypewriterDemo,
} from './motion-extra'
import { ConfettiDemo, ParallaxDemo, ParticleDemo } from './motion-decorate'
import { NumberDemo } from './number'
import { PopoverDemo } from './popover'
import { PortalDemo } from './portal'
import { SelectDemo } from './select'
import { TabsDemo } from './tabs'
import { ToastDemo } from './toast'
import { TooltipDemo } from './tooltip'
import { BreadcrumbDemo, PaginationDemo, StepsDemo } from './wayfinding'

export const demos: Record<DemoId, ComponentType> = complete<DemoId, ComponentType>()({
  headless: HeadlessDemo,
  portal: PortalDemo,
  'focus-trap': FocusTrapDemo,
  controlled: ControlledDemo,
  dialog: DialogDemo,
  'alert-dialog': AlertDialogDemo,
  drawer: DrawerDemo,
  popover: PopoverDemo,
  tooltip: TooltipDemo,
  toast: ToastDemo,
  command: CommandDemo,
  tabs: TabsDemo,
  accordion: AccordionDemo,
  'dropdown-menu': DropdownMenuDemo,
  select: SelectDemo,
  number: NumberDemo,
  transition: TransitionDemo,
  keyframes: KeyframesDemo,
  fade: FadeDemo,
  slide: SlideDemo,
  scale: ScaleDemo,
  spring: SpringDemo,
  stagger: StaggerDemo,
  presence: PresenceDemo,
  expand: ExpandDemo,
  'reduced-motion': ReducedMotionDemo,
  bounce: BounceDemo,
  flip: FlipDemo,
  hover: HoverDemo,
  press: PressDemo,
  ripple: RippleDemo,
  shake: ShakeDemo,
  check: CheckDemo,
  pulse: PulseDemo,
  shimmer: ShimmerDemo,
  indeterminate: IndeterminateDemo,
  'loading-dots': LoadingDotsDemo,
  typewriter: TypewriterDemo,
  indicator: IndicatorDemo,
  'smooth-scroll': SmoothScrollDemo,
  'flip-layout': FlipLayoutDemo,
  swipe: SwipeDemo,
  'scroll-reveal': ScrollRevealDemo,
  easing: EasingDemo,
  delay: DelayDemo,
  timeline: TimelineDemo,
  particle: ParticleDemo,
  confetti: ConfettiDemo,
  parallax: ParallaxDemo,
  button: ButtonDemo,
  'icon-button': IconButtonDemo,
  link: LinkDemo,
  input: InputDemo,
  textarea: TextareaDemo,
  checkbox: CheckboxDemo,
  radio: RadioDemo,
  switch: SwitchDemo,
  slider: SliderDemo,
  'number-input': NumberInputDemo,
  field: FieldDemo,
  breadcrumb: BreadcrumbDemo,
  pagination: PaginationDemo,
  steps: StepsDemo,
  popconfirm: PopconfirmDemo,
  alert: AlertDemo,
  progress: ProgressDemo,
  skeleton: SkeletonDemo,
  spinner: SpinnerDemo,
  empty: EmptyDemo,
  badge: BadgeDemo,
  tag: TagDemo,
  avatar: AvatarDemo,
  card: CardDemo,
  autocomplete: AutocompleteDemo,
})
