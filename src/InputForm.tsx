import React from 'react'
 import styled from 'styled-components'
 import * as color from './color'
 import { Button, ConfirmButton } from './Button'

 export function InputForm({
  value,
  onChange,
   onConfirm,
   onCancel,
   className,
 }: {
  value?: string
  onChange?(value: string): void
  onConfirm?(): void
   onCancel?(): void
   className?: string
 }) {
   const disabled = !value?.trim()
   const handleConfirm = () => {
     if (disabled) return
    onConfirm?.()
   }

   const ref = useAutoFitToContentHeight(value)

   return (
     <Container className={className}>
       <Input
         ref={ref}
         autoFocus
         placeholder="Enter a note"
         value={value}
        onChange={ev => onChange?.(ev.currentTarget.value)}
-        onChange={ev => setValue(ev.currentTarget.value)}
         onKeyDown={ev => {
           if (!((ev.metaKey || ev.ctrlKey) && ev.key === 'Enter')) return
           handleConfirm()
         }}
       />

       <ButtonRow>
         <AddButton disabled={disabled} onClick={handleConfirm} />
         <CancelButton onClick={onCancel} />
       </ButtonRow>
     </Container>
   )
 }
 const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 355px;
  height: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  background-color: ${color.LightSilver};

  > :not(:last-child) {
    flex-shrink: 0;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`

const CountBadge = styled.div`
  margin-right: 8px;
  border-radius: 20px;
  padding: 2px 6px;
  color: ${color.Black};
  background-color: ${color.Silver};
  font-size: 12px;
  line-height: 1;
`

const ColumnName = styled.div`
  color: ${color.Black};
  font-size: 14px;
  font-weight: bold;
`

const AddButton = styled.button.attrs({
  type: 'button',
  children: <PlusIcon />,
})`
  margin-left: auto;
  color: ${color.Black};

  :hover {
    color: ${color.Blue};
  }
`

const InputForm = styled(_InputForm)`
  padding: 8px;
`

const VerticalScroll = styled.div`
  height: 100%;
  padding: 8px;
  overflow-y: auto;
  flex: 1 1 auto;

  > :not(:first-child) {
    margin-top: 8px;
  }
`