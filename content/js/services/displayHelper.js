catalogEditor.factory('displayHelper', ['$log', 'FIELD_TYPE',

function ($log, FIELD_TYPE) {

    
    var globalTestInfo = {};


    return {
        
        addEmptyFieldsToSections: function (sections) {
            for (var i = 0; i < sections.length; i++) {
                sections[i].fields = [];
            };
            return sections;
        },

        getAllLists: function (fields) {
            var all_lists = [];
            for (var i = 0; i < fields.length; i++) { //sort once to create all the lists. and the global scope

                if (fields[i].field_type === FIELD_TYPE.list) { //'text': 1,'list': 2,'rich-text': 3,'h-list': 4}
                    var listItem = {};

                    listItem.list_id = fields[i].list_id;
                    listItem.value_id = fields[i].value_id;
                    listItem.list_display_sequence = fields[i].list_display_sequence;
                    listItem.cerner_value_text = fields[i].cerner_value_text;
                    listItem.override_value_text = fields[i].override_value_text;
                    listItem.field_value_is_overridden = fields[i].field_value_is_overridden;
                    listItem.field_value_is_hidden = fields[i].field_value_is_hidden;
                    all_lists.push(listItem);
                }
                if (fields[i].field_name === "test_name") {
                    globalTestInfo  = angular.copy(fields[i]);
                }
            }
            return all_lists;
        },

        createDisplayObject: function (fields, all_lists) {
            var newFields = [];
            var processedLists = [];

            for (var i = 0; i < fields.length; i++) { //create the test display object.

                var field = angular.copy(fields[i]);
                var listDone = false;

                if (field.field_type === FIELD_TYPE.list) {  //if this field is a part of a list

                    for (var p = 0; p < processedLists.length; p++) {
                        if (processedLists[p] === field.list_id) {
                            listDone = true;
                            break;
                        }
                    }
                    if (listDone === false) { // if this list was not done.
                        field.list = new Array();
                        for (var j = 0; j < all_lists.length; j++) {   //add all the correct list items to the field
                            if (all_lists[j].list_id === field.list_id) {
                                field.list.push(all_lists[j])
                            }
                        }
                        processedLists.push(field.list_id);
                        newFields.push(field);
                        field = null;
                        listDone = true;
                    }
                } else {
                    newFields.push(field);
                    field = null;
                }


            }

            return newFields;
        },

        addNewFieldsToSections: function (testSections, newFields) {
            for (var i = 0; i < newFields.length; i++) {
                testSections[newFields[i].section_id - 1].fields.push(newFields[i]);
            }
            return testSections;
        },

        getGlobalTestObject: function () {
            return globalTestInfo;
        },

        createHListFields: function (fields, hValues) {

            dtaHlist = {};
            for (var i = 0; i < fields.length; i++) {
                for (var j = 0; j < hValues.length; j++) {
                    if (fields[i].field_id === hValues[j].field_id) {
                        if (typeof fields[i].h_list === 'undefined') {
                            fields[i].h_list = [];
                        }
                        fields[i].h_list.push(hValues[j]);
                    }                    
                }
            }

            return fields;
        }

    }

}])