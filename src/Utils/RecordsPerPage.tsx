import React from 'react'

export default function RecordsPerPage(props: recordProps) {
    return (
        <div className="mb-3" style={{ width: "150px" }}>
            <label>Records Per Page</label>
            <select className="form-select" defaultValue={5} onChange={e => {
                props.onChange(parseInt(e.currentTarget.value, 10))
            }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>55</option>
                <option value={20}>20</option>

            </select>
        </div>
    )
}
interface recordProps {
    onChange(recordsPerPage: number): void
}