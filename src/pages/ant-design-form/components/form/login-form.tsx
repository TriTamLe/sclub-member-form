import { Form } from 'antd'
import { FORM_STEP_ITEMS, FORM_STEP_NUMBER } from '../../constant/form-steps'
import { useLoginForm } from '../../hooks'
import { TSClubMember } from '../../types'
import { MemoizedFormFooter } from '../custom/form-footer'
import { MemoizedFormSteps } from '../custom/form-steps'
import { AccountInformationForm } from './account-information'
import { PersonalInformationForm } from './personal-information'

export const LoginForm = () => {
  const {
    form,
    onFinish,
    stepInformation,
    currentStep,
    onChangeStep,
    submitButtonTitle,
  } = useLoginForm()

  return (
    <Form<TSClubMember>
      form={form}
      className='w-full h-full flex flex-row gap-5'
      onFinish={onFinish}>
      <MemoizedFormSteps
        stepInformation={stepInformation}
        items={FORM_STEP_ITEMS}
        onChangeStep={onChangeStep}
      />
      <div className='w-full relative'>
        {currentStep === FORM_STEP_NUMBER.ACCOUNT_INFORMATION && (
          <AccountInformationForm />
        )}
        {currentStep === FORM_STEP_NUMBER.PERSONAL_INFORMATION && (
          <PersonalInformationForm />
        )}
        <MemoizedFormFooter submitButtonTitle={submitButtonTitle} />
      </div>
    </Form>
  )
}