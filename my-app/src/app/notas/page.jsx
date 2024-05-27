import NoteSelector from "@/components/NoteSelector";

const notes = [
    { id: 1, name: "Apuntes 1", url: "/apuntes_1" },
    { id: 2, name: "Curso A", url: "/curso_a" },
    { id: 3, name: "Apuntes Varios", url: "/apuntes_varios"},
];

export default function NotesPage() {
    return (
        <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 w-auto">
            <div className='md:w-2/3 mt-10 border-b-2 border-black/50 pb-4'>Bienvenido a tus apuntes</div>
            <div className=''>Inicio &gt; Apuntes</div>
            {
                notes.map((note) => (
                    <NoteSelector key={note.id} name={note.name} targetUrl={note.url} />
                ))
            }
        </section>
    )
}