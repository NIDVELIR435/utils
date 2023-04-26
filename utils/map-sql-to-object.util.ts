import { isEmpty, isNil } from "lodash";

const data = [
    {
        id: 72,
        date: "2023-04-26 00:00:00",
        category: "DG",
        event_id: 777,
        event_name: "540mtrs (S7)",
        event_title: null,
        event_time: "11:24:00",
        event_off_time: "11:24:24",
        event_resulted: 1,
        event_meeting_id: 72,
        selection_id: 6181,
        selection_born_date: "2021-01-10",
        selection_age: null,
        selection_bred: null,
        selection_colour: "bk",
        selection_drawn: 2,
        selection_runner_num: 2,
        selection_dam: "Ballydoyle Honey",
        selection_sire: "Magical Bale",
        selection_jockey: null,
        selection_name: "Hollywell Bale",
        selection_owner: "Jamaican Flight",
        selection_silk: null,
        selection_event_id: 777,
        price_id: 16742,
        price_price_id: 49106787,
        price_decimal: 2.75,
        price_fraction: "7/4",
        price_mkt_num: 1,
        price_mkt_type: "B",
        price_time: "11:21:12",
        price_timestamp: 1682504472261,
        price_selection_id: 6181
    },
    {
        id: 72,
        date: "2023-04-26 00:00:00",
        category: "DG",
        event_id: 777,
        event_name: "540mtrs (S7)",
        event_title: null,
        event_time: "11:24:00",
        event_off_time: "11:24:24",
        event_resulted: 1,
        event_meeting_id: 72,
        selection_id: 6181,
        selection_born_date: "2021-01-10",
        selection_age: null,
        selection_bred: null,
        selection_colour: "bk",
        selection_drawn: 2,
        selection_runner_num: 2,
        selection_dam: "Ballydoyle Honey",
        selection_sire: "Magical Bale",
        selection_jockey: null,
        selection_name: "Hollywell Bale",
        selection_owner: "Jamaican Flight",
        selection_silk: null,
        selection_event_id: 777,
        price_id: 16755,
        price_price_id: 49106798,
        price_decimal: 2.875,
        price_fraction: "15/8",
        price_mkt_num: 1,
        price_mkt_type: "B",
        price_time: "11:22:14",
        price_timestamp: 1682504534389,
        price_selection_id: 6181
    },
    {
        id: 76,
        date: "2023-04-26 00:00:00",
        category: "DG",
        event_id: 777,
        event_name: "540mtrs (S7)",
        event_title: null,
        event_time: "11:24:00",
        event_off_time: "11:24:24",
        event_resulted: 1,
        event_meeting_id: 72,
        selection_id: 6181,
        selection_born_date: "2021-01-10",
        selection_age: null,
        selection_bred: null,
        selection_colour: "bk",
        selection_drawn: 2,
        selection_runner_num: 2,
        selection_dam: "Ballydoyle Honey",
        selection_sire: "Magical Bale",
        selection_jockey: null,
        selection_name: "Hollywell Bale",
        selection_owner: "Jamaican Flight",
        selection_silk: null,
        selection_event_id: 777,
        price_id: 16757,
        price_price_id: 49106800,
        price_decimal: 3,
        price_fraction: "2/1",
        price_mkt_num: 1,
        price_mkt_type: "B",
        price_time: "11:22:21",
        price_timestamp: 1682504541885,
        price_selection_id: 6181
    },
    {
        id: 72,
        date: "2023-04-26 00:00:00",
        category: "DG",
        event_id: 777,
        event_name: "540mtrs (S7)",
        event_title: null,
        event_time: "11:24:00",
        event_off_time: "11:24:24",
        event_resulted: 1,
        event_meeting_id: 72,
        selection_id: 6181,
        selection_born_date: "2021-01-10",
        selection_age: null,
        selection_bred: null,
        selection_colour: "bk",
        selection_drawn: 2,
        selection_runner_num: 2,
        selection_dam: "Ballydoyle Honey",
        selection_sire: "Magical Bale",
        selection_jockey: null,
        selection_name: "Hollywell Bale",
        selection_owner: "Jamaican Flight",
        selection_silk: null,
        selection_event_id: 777,
        price_id: 16761,
        price_price_id: 49106806,
        price_decimal: 3.25,
        price_fraction: "9/4",
        price_mkt_num: 1,
        price_mkt_type: "B",
        price_time: "11:23:09",
        price_timestamp: 1682504589322,
        price_selection_id: 6181
    },
    {
        id: 72,
        date: "2023-04-26 00:00:00",
        category: "DG",
        event_id: 778,
    },
    {
        id: 74,
        date: "2023-04-26 00:00:00",
        category: "DG",
        event_id: 777,
        event_name: "540mtrs (S7)",
        event_title: null,
        event_time: "11:24:00",
        event_off_time: "11:24:24",
        event_resulted: 1,
        event_meeting_id: 72,
        selection_id: null,
        selection_born_date: null,
        selection_age: null,
        selection_bred: null,
        selection_colour: null,
        selection_drawn: null,
        selection_runner_num: null,
        selection_dam: null,
        selection_sire: null,
        selection_jockey: null,
        selection_name: null,
        selection_owner: null,
        selection_silk: null,
        selection_event_id: null,
        price_id: null,
        price_price_id: null,
        price_decimal: null,
        price_fraction: null,
        price_mkt_num: null,
        price_mkt_type: null,
        price_time: null,
        price_timestamp: null,
        price_selection_id: null
    },
    {
        id: 74,
        date: "2023-04-26 00:00:00",
        category: "DG",
        event_id: 778,
        event_name: "540mtrs (S7)",
        event_title: null,
        event_time: "11:24:00",
        event_off_time: "11:24:24",
        event_resulted: 1,
        event_meeting_id: 74,
        selection_id: 22,
        selection_born_date: null,
        selection_age: null,
        selection_bred: null,
        selection_colour: null,
        selection_drawn: null,
        selection_runner_num: null,
        selection_dam: null,
        selection_sire: null,
        selection_jockey: null,
        selection_name: null,
        selection_owner: null,
        selection_silk: null,
        selection_event_id: null,
        price_id: 32,
        price_price_id: null,
        price_decimal: null,
        price_fraction: null,
        price_mkt_num: null,
        price_mkt_type: null,
        price_time: null,
        price_timestamp: null,
        price_selection_id: null,
        some_id:3
    }
];

//todo instead "relation" should be "oneToOne" | "manyToMany" | "oneToMany" | "manyToOne"  but logic doesn`t exist
type RelationType = "main" | "relation";
type NonEmptyArray<T> = ["id", ...T[]]

type Relation = {
    // for type "main" can be null, but for other type should describe sql
    // alias prefix egc.:
    // if in sql column alias is event_<column_name> than name should be "event"
    name: string | null,
    type: RelationType,
    // list of columns by rule:
    // if in sql we selected two columns with aliases:
    // event_id, event_time, than list should be [id, time]
    columnsAliases: NonEmptyArray<string>,
    relations?: Relation[]
}

function mapData(data: any,  desiredStructure: Relation) {
    if (isEmpty(desiredStructure) || isEmpty(data)) return [];

    const result = [];

    const handleLevel = ({ nextDataLevel: currentDataLevel, relationDescription, row }: {
        row: any,
        nextDataLevel: any,
        relationDescription: Relation
    }) => {
        const rowId = isNil(relationDescription.name) ? row["id"] : row[`${relationDescription.name}_id`];
        let entity = currentDataLevel.find((entity) => rowId === entity?.id);
        const currentIdExist = !isNil(isNil(relationDescription.name) ? row["id"] : row[`${relationDescription.name}_id`]);

        if (isNil(entity) && currentIdExist) {
            entity = {};
            currentDataLevel.push(entity);
        }


        if (currentIdExist)
            relationDescription.columnsAliases.forEach((column) => {
                entity[column] = (isNil(relationDescription.name) ? row[column] : row[`${relationDescription.name}_${column}`]) ?? null;
            });

        if (currentIdExist)
            if (!isEmpty(relationDescription.relations)) {
                relationDescription.relations.map((relation) => {
                    if (isNil(entity[relation.name]))
                        entity[relation.name] = [];

                    handleLevel({ row, nextDataLevel: entity[relation.name], relationDescription: relation });
                });
            }
    };

    for (const row of data)
        handleLevel({ row, nextDataLevel: result, relationDescription: desiredStructure });

    return result;
}

const desiredStructure: Relation = {
    name: null,
    type: "main",
    columnsAliases: ["id", "date", "category"],
    relations: [{
        name: "event",
        type: "relation",
        columnsAliases: ["id", "name", "title", "time", "off_time", "resulted"],
        relations: [{
            name: "selection",
            type: "relation",
            columnsAliases: ["id", "born_date", "age", "bred", "colour", "drawn", "runner_num", "dam", "sire", "jockey", "name", "owner", "silk"],
            relations: [
                {
                    name: "price",
                    type: "relation",
                    columnsAliases: ["id", "decimal", "fraction", "mkt_num", "mkt_type", "time", "timestamp"]
                },
                {
                    // will exist but empty
                    name: "un_exist_price",
                    type: "relation",
                    columnsAliases: ["id", "un_exist_decimal", "un_exist_fraction", "un_exist_mkt_num", "un_exist_mkt_type", "un_exist_time", "un_exist_timestamp"]
                }
            ]
        }]
    }]
}

console.dir(mapData(data, desiredStructure), {depth: null});

//empty data also possible but return empty array
console.log({emptyData: mapData([], desiredStructure)});

// only first level
delete desiredStructure["relations"];
console.log({oneRelation:mapData(data, desiredStructure)});
