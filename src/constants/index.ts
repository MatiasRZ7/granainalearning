import {
   GROUP_PAGE_MENU,
   GroupMenuProps,
   LANDING_PAGE_MENU,
   MenuProps,
} from "./menus"
import { SIGN_UP_FORM, SIGN_IN_FORM, AuthFormProps } from "./forms"
import {
   CREATE_GROUP_PLACEHOLDER,
   CreateGroupPlaceholderProps,
} from "./placeholder"
import { GROUP_LIST, GroupListProps } from "./slider"
type GroupleConstantsProps = {
   landingPageMenu: MenuProps[]
   signUpForm: AuthFormProps[]
   signInForm: AuthFormProps[]
   groupList: GroupListProps[]
   createGroupPlaceholder: CreateGroupPlaceholderProps[]
   groupPageMenu: GroupMenuProps[]
}

export const GROUPLE_CONSTANTS: GroupleConstantsProps = {
   landingPageMenu: LANDING_PAGE_MENU,
   signUpForm: SIGN_UP_FORM,
   signInForm: SIGN_IN_FORM,
   groupList: GROUP_LIST,
   createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
   groupPageMenu: GROUP_PAGE_MENU,
}
