
"post": {
    "summary": "Add a new pet",
        "requestBody": {
        "description": "Optional description in *Markdown*",
            "required": true,
                "content": {
            "application/json": {
                "schema": {
                    "$ref": "#/components/schemas/Pet"
                }
            },
            "application/xml": {
                "schema": {
                    "$ref": "#/components/schemas/Pet"
                }
            },
            "application/x-www-form-urlencoded": {
                "schema": {
                    "$ref": "#/components/schemas/PetForm"
                }
            },
            "text/plain": {
                "schema": {
                    "type": "string"
                }
            }
        }
    },
    "responses": {
        "201": {
            "description": "Created"
        }
    }
}
