import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { PlanCard } from '../../components/PlanCard'
import { plans } from '../../utils/plans'

export function Plans() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center gap-[50px] flex-wrap py-[70px]">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      <Footer />
    </>
  )
}