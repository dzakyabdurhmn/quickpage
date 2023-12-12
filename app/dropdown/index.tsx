import styled from "styled-components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const StyledTrigger = styled(DropdownMenuPrimitive.Trigger)`
  width: 170px;
  padding: 10px;
  background-image: linear-gradient(180deg, #ffffff 10%, #f7f7f7 90%);
  border: 1px solid #e8e8e8;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  &[data-state="open"] {
    background-image: linear-gradient(0deg, #ffffff 10%, #f7f7f7 90%);
  }
`;

const StyledContent = styled(DropdownMenuPrimitive.Content)`
  background-color: #fff;
  color: #666666;
  min-width: 170px;
  border: 1px solid #e8e8e8;
`;

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  all: unset;
  padding: 10px;
  display: flex;
  align-items: center;
  user-select: none;
  &:focus {
    background-color: #f9f9f9;
  }
`;

const StyledArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: #fff;
`;

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = StyledTrigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuArrow = StyledArrow;
