import { Injectable } from '@nestjs/common';

// Marks this class as a service that NestJS can inject into other classes.
@Injectable()
export class CourseService {

  // Returns a message representing all courses.
  getAllCourses(): string {
    return 'Get All Courses - from Service';
  }

  // Returns a message for a specific course using its ID.
  getCourseById(id: string): string {
    return `Get Course with ID: ${id} - from Service`;
  }

  // Returns a message representing the creation of a new course.
  createCourse(): string {
    return 'Create Course - from Service';
  }

  // Returns a message representing the update of an existing course.
  updateCourse(id: string): string {
    return `Update Course ${id} - from Service`;
  }

  // Returns a message representing a partial update of a course.
  patchCourse(id: string): string {
    return `Patch Course ${id} - from Service`;
  }

  // Returns a message representing the deletion of a course.
  deleteCourse(id: string): string {
    return `Delete Course ${id} - from Service`;
  }
}