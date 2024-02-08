export default function Section({name, children}){
    return (
        <section className={`${name} flex justify-center items-center flex-col p-10 md:p-24 gap-10`}>
            {children}
        </section>
    )
}