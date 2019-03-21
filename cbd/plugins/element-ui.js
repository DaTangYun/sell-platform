import Vue from 'vue'
import {
  Button,
  Dialog,
  Pagination,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Carousel,
  CarouselItem,
  Message,
  Loading,
  Input,
  InputNumber,
  Select,
  Option,
  OptionGroup,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Upload,
  Radio,
  RadioGroup,
  RadioButton,
  Tabs,
  TabPane,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  DatePicker,
  Icon
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Tabs, {
    locale
  })
  Vue.use(Icon, {
    locale
  })
  Vue.use(DatePicker, {
    locale
  })
  Vue.use(TabPane, {
    locale
  })
  Vue.use(Button, {
    locale
  })
  Vue.use(Dialog, {
    locale
  })
  Vue.use(Pagination, {
    locale
  })
  Vue.use(Form, {
    locale
  })
  Vue.use(FormItem, {
    locale
  })
  Vue.use(Breadcrumb, {
    locale
  })
  Vue.use(BreadcrumbItem, {
    locale
  })
  Vue.use(Carousel, {
    locale
  })
  Vue.use(CarouselItem, {
    locale
  })
  // Vue.use(Message, {
  //   locale
  // })
  Vue.use(Loading, {
    locale
  })
  Vue.use(Input, {
    locale
  })
  Vue.use(InputNumber, {
    locale
  })
  Vue.use(Select, {
    locale
  })
  Vue.use(Option, {
    locale
  })
  Vue.use(OptionGroup, {
    locale
  })
  Vue.use(Menu, {
    locale
  })
  Vue.use(MenuItem, {
    locale
  })
  Vue.use(MenuItemGroup, {
    locale
  })
  Vue.use(Submenu, {
    locale
  })
  Vue.use(Upload, {
    locale
  })
  Vue.use(Radio, {
    locale
  })
  Vue.use(RadioButton, {
    locale
  })
  Vue.use(RadioGroup, {
    locale
  })
  Vue.use(Checkbox, {
    locale
  })
  Vue.use(CheckboxButton, {
    locale
  })
  Vue.use(CheckboxGroup, {
    locale
  })
  Vue.prototype.$message = Message
  Vue.prototype.$loading = Loading.service
}
