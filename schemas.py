from pydantic import BaseModel
from typing import Optional

# What the user sends when creating
class TodoCreate(BaseModel):
    title: str
    description: Optional[str] = None
    done: bool = False

# What the user sends when updating
class TodoUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    done: Optional[bool] = None

# What we send back in responses (includes id)
class TodoResponse(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    done: bool

    class Config:
        from_attributes = True  # allows converting DB model → Pydantic