export default function SectionDetail({params}: {
    params: {
        noteId: String,
        sectionId: String
    }
}) {
    return <h4>Note{params.noteId} Section{params.sectionId}</h4>
}