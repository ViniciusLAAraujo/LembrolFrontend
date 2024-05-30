import { Tag } from "../../modules/tag/types"


export type EditTagModalProps = {
    selectedTag : Tag
    handleEditClick : (id:string) => void
}