import Caixa from "@/components/Caixa";

// grid-cols-1
// md:grid-cols-3
// xl:grid-cols-4
// 2xl:grid-cols-6

export default function Inicial() {
    return (
        <div className={`
            bg-blue-500
            p-7 grid gap-2.5 grid-cols-3
        `}>
            <Caixa className="row-span-2">#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            {/* <Caixa>#4</Caixa> */}
            <Caixa className="col-span-2">#5</Caixa>
            {/* <Caixa>#6</Caixa> */}
            <Caixa className="col-span-2">#7</Caixa>
            {/* <Caixa>#8</Caixa> */}
            <Caixa>#9</Caixa>
        </div>
    )
}